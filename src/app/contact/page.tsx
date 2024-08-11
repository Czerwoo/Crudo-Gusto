import Header from "@/components/quotation";

export default function ContactPage() {
  return (
    <main className="">
      <Header content="Kontakt z naszymi delikatesami" />
      <section className="flex flex-row max-sm:flex-col max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%]   max-sm:text-base sm:text-sm md:text-sm lg:text-xl xl:text-2xl py-5 bg-beige-color py">
        <div className="sm:w-1/2 max-sm:w-full max-sm:p-4">
          <h2>Crudo Gusto</h2>
          <p>
            Wiankowa 11A <br />
            91-498 Łódź <br />
            <br />
            Sklep: <br />
            <a href="tel:726-481-207">726-481-207</a> <br />
            <a href="mailto:crudogusto@wp.pl">crudogusto@wp.pl</a> <br />
            <br />
            Godziny otwarcia sklepu: <br />
            pon-pt: 9:00 - 18:00 <br />
            sob: 9:00 - 15:00 <br />
            niedziela: <span className="text-red">nieczynne</span>
          </p>
        </div>
        <div className="sm:w-1/2 max-sm:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.2730584369715!2d19.44582547699788!3d51.81944218785942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bca65115eb8c7%3A0xab4fa6ae74ec2fff!2zV2lhbmtvd2EgMTFBLCA5MS00OTggxYHDs2TFug!5e0!3m2!1spl!2spl!4v1723150119668!5m2!1spl!2spl"
            className="border-0 w-full h-full"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
