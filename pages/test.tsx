import React from 'react';
import nookies from 'nookies';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';

import firebaseAdmin from 'src/services/firebase/firebaseAdmin';

const Test = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { message } = props;
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Test;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const { uid, email } = token;

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {} as never,
    };
  }
};
