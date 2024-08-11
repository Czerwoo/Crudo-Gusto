import Gallery from "@/components/gallery";
import ImageDescProps from "@/components/ImageDescProps";
import Header from "@/components/header";

export default function Page() {
  return (
    <main>
      <Header content="Crudo Gusto - włoskie jedzenie, delikatesy i wyjątkowy catering śródziemnomorski" />
      <ImageDescProps
        src="https://res.cloudinary.com/dku1cgzdg/image/upload/v1723138157/image00020_t2jtgh.jpg"
        title="Inspiracja"
        description="Podczas jednej z długich rozmów o jedzeniu narodził się pomysł wyjątkowego włoskiego sklepu. W Crudo Gusto stawiamy sobie za cel zachwycać smakiem naszych produktów i dań. Dlatego proponujemy Wam 
najwyższą jakość i delikatesy z atmosferą Włoch."
        width={1365}
        height={1706}
        inverted
      />
      <ImageDescProps
        src="https://res.cloudinary.com/dku1cgzdg/image/upload/v1723138193/image00022_mcp8wu.jpg"
        title="Nasz włoski sklep"
        description='Crudo Gusto od 2020 roku mieści się przy ul. Wiankowej 11a. Nasza historia rozpoczęła się od niepozornej wyspy handlowej, która mimo swojego charakteru przyciągała klientów wyjątkową jakością serwowanych produktów. Z czasem pojawiły się nowe projekty i propozycje, ale nasz asortyment pozostaje niezmienny. Jego wyznacznikiem jest smak - ma przywodzić na myśl wspomnienie włoskich wakacji. Tylko oryginalne produkty, długie rozmowy o jedzeniu i klimat włoskiego "negozio". Każdego dnia dbamy o wyjątkowość tego miejsca, a naszych klientów traktujemy jak najlepszych przyjaciół.'
        width={1365}
        height={1706}
      />
      <ImageDescProps
        src="https://res.cloudinary.com/dku1cgzdg/image/upload/v1723138026/image00018_iwxvma.jpg"
        secondSrc="https://res.cloudinary.com/dku1cgzdg/image/upload/v1723138026/image00017_sqm8cf.jpg"
        width={1365}
        height={1706}
        onlyPhoto
      />
      <Header content="Produkty dostępne w Crudo Gusto" />
      <Gallery width={1365} height={1706} />
    </main>
  );
}
