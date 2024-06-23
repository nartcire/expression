import { useEffect, useState } from 'react';

const ProfileFetcher = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => setProfile(json['results'][0].gender))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {profile ? <pre>{JSON.stringify(profile, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default ProfileFetcher