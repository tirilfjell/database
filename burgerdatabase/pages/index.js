import firebaseInstance from "../config/firebase";

export default function Home({ menu, error }) {
  if (error !== undefined) {
    return <p>En feil har oppstått: {error}</p>;
  }
  return (
    <pre>
      <code>{JSON.stringify(menu, null, 2)}</code>
    </pre>
  );
}

Home.getInitialProps = async () => {
  try {
    const collection = await firebaseInstance.firestore().collection("menu");
    const document = await collection.doc("u8JvntDwaJQEAmeZ8gkq").get();

    if (document.exists !== true) {
      throw new Error("dokumentet finnes ikke");
    }

    const menu = {
      id: document.id,
      ...document.data()
    };

    return { menu };
  } catch (error) {
    return {
      error: error.message
    };
  }
};
