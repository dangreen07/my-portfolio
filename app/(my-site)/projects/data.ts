"use server";

import { getPayload } from "payload";
import config from '@/payload.config';

export async function getProjects() {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const all = await payload.find({
        collection: 'projects',
        pagination: false, // returns all docs
    }).then((value) => value.docs);
    return all;
}