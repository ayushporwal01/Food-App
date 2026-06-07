import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Contact Us</h1>

      <form action="#" className="flex flex-col items-center">
        <div className={styles.formItems}>
          <label htmlFor="fullName" className="text-xl">
            Full Name
          </label>
          <input type="text" id="fullName" className={styles.formInput} />
        </div>

        <div className={styles.formItems}>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input type="text" id="email" className={styles.formInput} />
        </div>

        <div className={styles.formItems}>
          <label htmlFor="phone" className="text-xl">
            Phone
          </label>
          <input type="tel" id="phone" className={styles.formInput} />
        </div>

        <button
          type="submit"
          className="bg-black text-white w-full py-1.5 text-lg rounded-lg mt-5 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
