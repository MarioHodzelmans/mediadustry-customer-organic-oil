'use client';

import {useEffect, useRef, useState} from 'react';

const videoUrl='https://www.bdaromatics.com/images/BD%20Aromatics%20Video%20final%202026_website.mp4';

export default function VideoLightbox({label}:{label:string}){
  const dialog=useRef<HTMLDialogElement>(null);
  const video=useRef<HTMLVideoElement>(null);
  const [open,setOpen]=useState(false);

  function show(){
    setOpen(true);
    dialog.current?.showModal();
  }
  function close(){
    video.current?.pause();
    dialog.current?.close();
    setOpen(false);
  }
  useEffect(()=>{
    if(open) video.current?.play().catch(()=>undefined);
  },[open]);

  return <>
    <button className="hero-play" type="button" onClick={show} aria-label={label}>
      <span className="hero-play-circle"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="m9 6 9 6-9 6V6Z" fill="currentColor"/></svg></span>
      <span className="hero-play-label">{label}</span>
    </button>
    <dialog className="video-lightbox" ref={dialog} onClose={()=>setOpen(false)} onClick={event=>{if(event.target===dialog.current) close()}}>
      <div className="video-lightbox-inner">
        <button type="button" className="video-close" onClick={close} aria-label="Close video">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </button>
        {open&&<video ref={video} controls playsInline preload="metadata"><source src={videoUrl} type="video/mp4"/></video>}
      </div>
    </dialog>
  </>;
}
