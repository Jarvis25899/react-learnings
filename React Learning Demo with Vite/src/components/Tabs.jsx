export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const Container = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
