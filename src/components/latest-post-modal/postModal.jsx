import './postModal.css'

const PostModal = ({onClick,postTitle,postType, imgSrc})=> {
    return (
  
     	<div className="latest-post-item">
			<a onClick={onClick} className="latest-post-link">
				<div className="latest-post-thumbnail">
					<span className="post-type">{postType}</span>											
					<img width="343" 
                        height="200" 
                        src={imgSrc} 
                        className="attachment-square-thumb size-square-thumb wp-post-image" 
                        alt="" 
                        decoding="async" 
                        fetchPriority="high" 
                        sizes="(max-width: 343px) 100vw, 343px" 
                    />											</div>
					<div className="latest-post-content">		
					    <h3 className="latest-post-title">
                            {postTitle}
                        </h3>
					</div>
			</a>
		</div>
										
    )
}

export default PostModal;