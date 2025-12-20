import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { BlogPosts } from './app/collections/blog-posts';
import { Media } from './app/collections/media';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

export default buildConfig({
    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor(),

    // Define and configure your collections in this array
    collections: [
        BlogPosts,
        Media
    ],

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    // Whichever Database Adapter you're using should go here
    // Mongoose is shown as an example, but you can also use Postgres
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        }
    }),
    plugins: [
        vercelBlobStorage({
            enabled: true, // Optional, defaults to true
            // Specify which collections should use Vercel Blob
            collections: {
                media: true,
            },
            // Token provided by Vercel once Blob storage is added to your Vercel project
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
    // If you want to resize images, crop, set focal point, etc.
    // make sure to install it and pass it to the config.
    // This is optional - if you don't need to do these things,
    // you don't need it!
    sharp
})