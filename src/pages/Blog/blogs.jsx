import './blogs.css';
import BlogModal from '../../components/blogModal/blog';
import { blogData } from '../../utils/appData';
const Blogs = ()=> {
    return (
    <>
    {/* <SearchButton/> */}

    {blogData.map((blog, index) => (
        <BlogModal key={index} {...blog} />
    ))}

    {/* {blogData.map((blog, index) => (
        <BlogModal
            key={index}
            category={blog.category}
            blogTitle={blog.blogTitle}
            author={blog.author}
            excerpt={blog.excerpt}
            blogImgLink={blog.blogImgLink}
            postDate={blog.postDate}
            blogPostLink={blog.blogPostLink}
        />
    ))} */}
    </>
    )
}

export default Blogs;
