class PostService {
    async createPost(author, data) {
        throw new Error( 'Not implemented' )
    }

    async getPostById(id) {

        throw new Error( 'Not implemented' )
    }

    async addLike(postId) {
        throw new Error( 'Not implemented' )
    }

    async getPostByAuthor(author) {
        throw new Error( 'Not implemented' )
    }

    async addComment(postId, commenter, message) {
        throw new Error( 'Not implemented' )
    }

    async deletePost(postId) {
        throw new Error( 'Not implemented' );
    }

    async getPostByTags(tagsString) {
        throw new Error( 'Not implemented' );
    }

    async getPostsByPeriod(dateFrom, dateTo) {
        throw new Error( 'Not implemented' );
    }

    async updatePost(postId, data) {
        throw new Error( 'Not implemented' );
    }
}

export default new PostService();
