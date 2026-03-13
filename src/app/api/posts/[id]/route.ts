import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = await prisma.post.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
      },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { title, slug, excerpt, content, thumbnail, categoryId, published, featured } = body;

    const post = await prisma.post.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content && { content }),
        ...(thumbnail !== undefined && { thumbnail }),
        ...(categoryId && { categoryId }),
        ...(published !== undefined && { published }),
        ...(featured !== undefined && { featured }),
      },
      include: {
        category: true,
        author: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Get post to clean up thumbnail
    const post = await prisma.post.findUnique({ where: { id } });
    if (post?.thumbnail) {
      const filePath = path.join(process.cwd(), 'public', post.thumbnail);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: 'Post deleted' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
