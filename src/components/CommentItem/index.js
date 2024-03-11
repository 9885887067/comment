import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props

  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const postTime = formatDistanceToNow(date)

  return (
    <li className="list-item">
      <div className="initial-container">
        <div className={initialClassName}>
          <p className="initial">name[0].toUpperCase()</p>
        </div>

        <div className="user-name-container">
          <p className="name">{name}</p>
          <p className="time">{postTime} ago</p>
        </div>
        <p className="comment">{comment}</p>
      </div>
      <button className="button-container">
        <button className="like-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            className="like"
            alt="like"
          />
        </button>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </button>
    </li>
  )
}

export default CommentItem
