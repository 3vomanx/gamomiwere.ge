import React from "react";
import styles from "../styles/Privacy.module.css";
import { useEffect } from "react";
import Head from "next/head";

const Privacy = () => {
  useEffect(() => {
    // Add the ID to the body element when the component mounts
    document.body.id = "privacy-page";

    // Clean up the ID when the component unmounts
    return () => {
      document.body.id = "";
    };
  }, []);

  return (
    <div className="privacy">
      <Head>
        <meta charSet="utf-8" />
        <title>უსაფრთხოების პოლიტიკა | Gamomiwere.ge</title>
        <meta property="og:title" content="უსაფრთხოების პოლიტიკა | Gamomiwere.ge" />
        <link rel="canonical" href="https://gamomiwere.ge/konfidencialuroba" />
        <meta name="robots" content="index, follow" />
      </Head>
      <p className={styles.PrivacyText}>
        კონფიდენციალურობის პოლიტიკა sesxeba.ge-ზე ჩვენ ვალდებულნი ვართ დავიცვათ
        ჩვენი მომხმარებლების კონფიდენციალურობა და პირადი ინფორმაცია. ეს
        კონფიდენციალურობის პოლიტიკა ასახავს იმას, თუ როგორ ვაგროვებთ, ვიყენებთ
        და ვიცავთ თქვენს ინფორმაციას, როდესაც თქვენ ეწვევით ჩვენს ვებსაიტს ან
        იყენებთ ჩვენს სერვისებს. sesxeba.ge-ზე წვდომით ან გამოყენებით თქვენ
        ეთანხმებით წინამდებარე კონფიდენციალურობის პოლიტიკის პირობებს. ინფორმაცია
        ჩვენ ვაგროვებთ: ჩვენ შეიძლება შევაგროვოთ პერსონალური ინფორმაცია,
        როგორიცაა თქვენი სახელი, ელექტრონული ფოსტის მისამართი და ტელეფონის
        ნომერი, როდესაც თქვენ ნებაყოფლობით მოგვაწოდებთ მას. გარდა ამისა, ჩვენ
        შეიძლება შევაგროვოთ არაპერსონალური ინფორმაცია, როგორიცაა თქვენი IP
        მისამართი, ბრაუზერის ტიპი და მოწყობილობის ინფორმაცია, რათა გავაუმჯობესოთ
        თქვენი გამოცდილება ჩვენს ვებსაიტზე. ინფორმაციის გამოყენება: ჩვენ
        ვიყენებთ ჩვენს მიერ შეგროვებულ ინფორმაციას ჩვენი სერვისების
        უზრუნველსაყოფად და გასაუმჯობესებლად, თქვენს შეკითხვებზე პასუხის
        გასაცემად, თქვენი გამოცდილების პერსონალიზებისთვის და თქვენთან
        კომუნიკაციისთვის ჩვენი შეთავაზებების შესახებ. ჩვენ ასევე შეიძლება
        გამოვიყენოთ თქვენი ინფორმაცია ტენდენციების გასაანალიზებლად, ჩვენი
        ვებსაიტის ეფექტურობის მონიტორინგისთვის და თაღლითური ქმედებების თავიდან
        ასაცილებლად. ინფორმაციის გაზიარება: ჩვენ არ ვყიდით, არ ვაჭრობთ ან
        ვაქირავებ თქვენს პირად ინფორმაციას მესამე პირებზე. თუმცა, ჩვენ შეიძლება
        გავუზიაროთ თქვენი ინფორმაცია სანდო სერვისის პროვაიდერებს, რომლებიც
        გვეხმარებიან ჩვენი ვებსაიტის მუშაობაში და ჩვენი სერვისების მიწოდებაში.
        ეს მესამე მხარის პროვაიდერები ვალდებულნი არიან შეინახონ თქვენი
        ინფორმაცია კონფიდენციალურად და გამოიყენონ იგი მხოლოდ ჩვენს მიერ
        განსაზღვრული მიზნებისთვის. უსაფრთხოება: ჩვენ ვიღებთ გონივრულ ზომებს,
        რათა დავიცვათ თქვენი პერსონალური ინფორმაცია არასანქცირებული წვდომისგან,
        გამჟღავნებისგან, ცვლილების ან განადგურებისგან. თუმცა, გთხოვთ,
        გაითვალისწინოთ, რომ ინტერნეტით ან ელექტრონული შენახვის არც ერთი მეთოდი
        არ არის 100%-ით უსაფრთხო და ჩვენ ვერ ვიძლევით გარანტიას აბსოლუტურ
        უსაფრთხოებაზე. ქუქიები: ჩვენ შეიძლება გამოვიყენოთ ქუქიები და მსგავსი
        ტექნოლოგიები, რათა გავაუმჯობესოთ თქვენი დათვალიერების გამოცდილება და
        შევაგროვოთ ინფორმაცია იმის შესახებ, თუ როგორ იყენებთ ჩვენს ვებსაიტს.
        თქვენ შეგიძლიათ აირჩიოთ ქუქიების გამორთვა თქვენი ბრაუზერის
        პარამეტრებიდან, მაგრამ გთხოვთ გაითვალისწინოთ, რომ ამან შეიძლება გავლენა
        მოახდინოს ჩვენი ვებსაიტის გარკვეულ მახასიათებლებზე. მესამე მხარის
        ბმულები: ჩვენი ვებგვერდი შეიძლება შეიცავდეს ბმულებს მესამე მხარის
        ვებსაიტებზე. ჩვენ არ ვართ პასუხისმგებელი ამ ვებსაიტების
        კონფიდენციალურობის პრაქტიკაზე ან შინაარსზე. ჩვენ მოგიწოდებთ, გადახედოთ
        ამ მესამე მხარის კონფიდენციალურობის პოლიტიკას, სანამ რაიმე პერსონალურ
        ინფორმაციას მიაწვდით. ბავშვების კონფიდენციალურობა: ჩვენი სერვისები არ
        არის განკუთვნილი 18 წლამდე ასაკის პირებისთვის. ჩვენ შეგნებულად არ
        ვაგროვებთ პერსონალურ ინფორმაციას ბავშვებისგან. თუ თვლით, რომ ჩვენ
        შესაძლოა შევაგროვეთ ინფორმაცია ბავშვისგან, გთხოვთ, დაუყოვნებლივ
        დაგვიკავშირდეთ და ჩვენ მივიღებთ შესაბამის ზომებს, რომ ამოიღოთ ინფორმაცია
        ჩვენი ჩანაწერებიდან. ცვლილებები კონფიდენციალურობის პოლიტიკაში: ჩვენ
        ვიტოვებთ უფლებას შეცვალოთ ეს კონფიდენციალურობის პოლიტიკა ნებისმიერ დროს.
        ნებისმიერი ცვლილება ძალაში შევა ჩვენს ვებგვერდზე გამოქვეყნებისთანავე.
        ჩვენ გირჩევთ, პერიოდულად გადახედოთ ამ კონფიდენციალურობის პოლიტიკას
        ნებისმიერი განახლებისთვის. თუ თქვენ გაქვთ რაიმე შეკითხვა ან შეშფოთება
        ჩვენს კონფიდენციალურობის პოლიტიკასთან დაკავშირებით, გთხოვთ
        დაგვიკავშირდეთ contact@sesxeba.ge მოხარული ვიქნებით დაგეხმაროთ.
      </p>
    </div>
  );
};

export default Privacy;
