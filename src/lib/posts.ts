import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

export type { PostData, PostDetailData };
export { getSortedPostsData, getPostData, getAllPostIds };

interface BasePostData {
    title?: string;
    date?: string;
}

interface PostData extends BasePostData {
    id: string;
}

interface PostDetailData extends BasePostData {
    id: string | string[];
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents).data;

        // Combine the data with the id
        const data: PostData = {
            id,
            ...matterResult
        };
        return data;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

async function getPostData(id: string | string[]): Promise<PostDetailData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const data: PostDetailData = {
        id,
        contentHtml,
        ...matterResult.data
    };
    return data;
}

/*
  Returns an array that looks like this:
  [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
  ]
* */
function getAllPostIds(): { params: { id: string } }[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md/, '')
            }
        };
    });
}
