export function createPost(post) {
    return {
        payload: post,
        type: 'CREATE_POST'
    }
}