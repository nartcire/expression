import { useEffect, useState } from 'react';

const JokeFetcher = () => {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
      fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(json => setJoke(json['attachments'][0].fallback))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {joke ? <pre>{JSON.stringify(joke, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default JokeFetcher