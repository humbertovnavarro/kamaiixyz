import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import socket from 'lib/socketio';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    socket.emit('hi')
  }, []);
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
