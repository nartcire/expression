import { useEffect, useState } from 'react';

const ProfileFetcher = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => setProfile(json['results'][0]))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {profile ? profile : 'Loading'}
            {/* {profile ? <pre>{JSON.stringify(profile, null, 2)}</pre> : 'Loading...'} */}
        </div>
    )
}

export default ProfileFetcher