import axios from 'axios'
import * as str from '../../actions'

export function getOtherPeople(props, chatId, successCallback, errorCallback) {
    axios.get(
        `${str.getApiUrl(props)}/chats/${chatId}/others/`,
        { headers: { 
            "Public-Key": props.publicKey,
            "User-Name": props.userName,
            "User-Secret": props.userPassword,
        }}
    )

    .then((response) => {
        if (response.status === 200) {
            props.onGetOtherPeople && props.onGetOtherPeople(chatId, response.data)

            successCallback && successCallback(chatId, response.data)
        }
    })
    
    .catch((error) => {
        console.log('Fetch Messages Error', error)

        errorCallback && errorCallback()
    });
}