import React from "react"
import { Link } from "gatsby"

const PostsListCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug

  return (
    <div className="mb-4">
    <h2 className="card-title">{title}</h2>
    <div
        dangerouslySetInnerHTML={{
        __html: frontmatter.description || excerpt,
        }}
    />
    <Link to={`/${fields.slug}/`} className="btn btn-primary">
        Read More &rarr;
    </Link>
      <footer>
        Posted on {frontmatter.date}
      </footer>
    </div>
  )
}

export default PostsListCard