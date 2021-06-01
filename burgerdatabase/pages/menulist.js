import firebaseInstance from "../config/firebase";

function MenuList({ menu, error }) {
  return (
    <main>
      <h1>Meny</h1>
      <ul>
        {menu.map(item => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </main>
  );
}

MenuList.getInitialProps = async () => {
  try {
    const menuCollection = await firebaseInstance
      .firestore()
      .collection("menu");
    const menuData = await menuCollection.get();

    let menu = [];

    menuData.forEach(toast => {
      menu.push({
        id: toast.id,
        ...toast.data()
      });
    });
    return { menu };
  } catch (error) {
    return {
      error: error.message
    };
  }
};

export default MenuList;
