import Footer from "@/components/Footer";

export const metadata = {
  title: "Godsgift Braimah | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
