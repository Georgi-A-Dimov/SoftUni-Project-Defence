export default function CreatePost() {
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <div className="box animated fadeInUp">
                        <div className="box-header">
                            <h2>Create Post</h2>
                        </div>
                        <label htmlFor="title">Title</label>
                        <br />
                        <input type="text" id="title" name="title"/>
                        <br />
                        <label htmlFor="post-image">Image</label>
                        <br />
                        <input type="text" id="imageUrl" name="imageUrl"/>
                        <br />
                        <label htmlFor="category">Category</label>
                        <br />
                        <input type="text" id="category" name="category"/>
                        <br />
                        <label htmlFor="summary">Summary</label>
                        <br />
                        <textarea name="summary" id="summary"></textarea>
                        <br />
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </section>
    );
};