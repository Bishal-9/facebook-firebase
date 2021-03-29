import React, {useState} from "react"
import './MessageSender.css'
import {Avatar} from "@material-ui/core"
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded'
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded'
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded'
import {useStateValue} from "./StateProvider"
import db from "./Firebase"
import firebase from 'firebase'

function MessageSender() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [{user}, dispatch] = useStateValue()

    const handleSubmit = e => {
        e.preventDefault()

        db
            .collection('posts')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
            })

        setInput('')
        setImageUrl('')
    }

    return <div className='messageSender'>
        <div className="messageSender__top">
            <Avatar src={user.photoURL} />
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='messageSender__input'
                    type="text"
                    placeholder={`What's on your mind, ${user.displayName}?`}
                />
                <input
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    type="text"
                    placeholder='image URL (Optional)'
                />
                <button onClick={handleSubmit} type='submit'>Button</button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamRoundedIcon style={{ color: 'red' }} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryRoundedIcon style={{ color: 'green' }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonRoundedIcon style={{ color: 'yellow' }} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
}

export default MessageSender