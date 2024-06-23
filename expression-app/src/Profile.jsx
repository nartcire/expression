import React from 'react';
import ProfileFetcher from './ProfileFetcher';
import { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Basic() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => setProfile(json['results'][0]))
        .catch(error => console.error(error));

    }, []);

    return (
        <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer>
            <MDBRow className="justify-content-center">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
                <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                    <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                        <MDBCardImage
                        style={{ width: '180px', borderRadius: '10px' }}
                        src={profile ? profile.picture.large : 'Loading...'}
                        alt='Generic placeholder image'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <MDBCardTitle>{profile ? profile.name.first + ' ' + profile.name.last : 'Loading...'}</MDBCardTitle>
                        <MDBCardText>{profile? 'Age: ' + profile.dob.age : 'Loading...'}</MDBCardText>

                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: '#efefef' }}>
                        <div>
                            <p className="small text-muted mb-1">Jokes</p>
                            <p className="mb-0">{profile ? profile.registered.age: 'Loading...'}</p>
                        </div>
                        <div className="px-3">
                            <p className="small text-muted mb-1">Followers</p>
                            <p className="mb-0">976</p>
                        </div>
                        <div>
                            <p className="small text-muted mb-1">Rating</p>
                            <p className="mb-0">8.5</p>
                        </div>
                        </div>
                        <div className="d-flex pt-1">
                        <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                        <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                        </div>
                    </div>
                    </div>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    );
}