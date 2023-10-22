import React, { useEffect, useRef } from 'react';
declare global {
     interface HTMLVideoElement {
          srcObject?: MediaStream;
     }
}

import io, { Socket } from 'socket.io-client';

const VideoCall: React.FC = () => {
    const localVideo = useRef<HTMLVideoElement>(null);
    const remoteVideo = useRef<HTMLVideoElement>(null);
const socket: Socket = io('http://localhost:4000', { forceNew: true });

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                if (localVideo.current) {
                    localVideo.current.srcObject = stream;
                }

                const peerConnection = new RTCPeerConnection({
                    iceServers: [
                        { urls: 'stun:stun.l.google.com:19302' }
                    ]
                });

                peerConnection.onicecandidate = event => {
                    if(event.candidate) {
                        socket.emit('ice-candidate', event.candidate);
                    }
                };

                peerConnection.ontrack = event => {
                    if (remoteVideo.current) {
                        remoteVideo.current.srcObject = event.streams[0];
                    }
                };

                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

                socket.on('offer', (offer: RTCSessionDescriptionInit) => {
                    peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
                        .then(() => peerConnection.createAnswer())
                        .then(answer => {
                            return peerConnection.setLocalDescription(answer);
                        })
                        .then(() => {
                            if (peerConnection.localDescription) {
                                socket.emit('answer', peerConnection.localDescription);
                            }
                        });
                });

                socket.on('answer', (answer: RTCSessionDescriptionInit) => {
                    peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
                });

                socket.on('ice-candidate', (iceCandidate: RTCIceCandidateInit) => {
                    const candidate = new RTCIceCandidate(iceCandidate);
                    peerConnection.addIceCandidate(candidate);
                });
            });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <video ref={localVideo} autoPlay muted></video>
            <video ref={remoteVideo} autoPlay></video>
        </div>
    );
};

export default VideoCall;
