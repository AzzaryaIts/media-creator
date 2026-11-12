/* עוטף את מנוע הזיהוי: קבצי השפה נטענים מקבצי js באתר עצמו (ולא מרשת חיצונית) */
const _fetch=self.fetch.bind(self);
self.fetch=async(u,...a)=>{const m=String(u).match(/(heb|eng)\.traineddata\.gz$/);
  if(m){const k='OCR_LANG_'+m[1];if(!self[k])importScripts('lang-'+m[1]+'.js');
    const s=atob(self[k]);const b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);self[k]=null;return new Response(b);}
  return _fetch(u,...a);};
importScripts('worker.min.js');
