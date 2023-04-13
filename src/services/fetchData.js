
export async function getPostsData(url, setState) {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
}