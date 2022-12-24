import client from '@sanity/client';

export default client({
    projectId: "l2m71ycp",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-12-24",
})