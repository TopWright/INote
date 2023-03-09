import { useRouter } from "next/router";

import { useFormik } from "formik";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Select from "@/components/UI/Select";

import classes from "./NoteForm.module.css";

import addData from "@/src/firebase/fireStore";

import { FiChevronLeft } from "react-icons/fi";

const select = [
  {
    id: 1,
    value: "Personal",
  },
  {
    id: 2,
    value: "Work",
  },
  {
    id: 3,
    value: "School",
  },
  {
    id: 4,
    value: "Ministry",
  },
];

const NoteForm = () => {
  const router = useRouter();

  const gotoNotesPage = () => {
    router.push("/notes");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      collection: "",
      content: "",
    },

    onSubmit: async (data) => {
      try {
        await addData(data, "Notes");
      } catch (e) {
        console.log(e);
      }

      router.push("/notes");
    },
  });

  return (
    <form className={classes.note} onSubmit={formik.handleSubmit}>
      <Button className={classes.button} onClick={gotoNotesPage}>
        <FiChevronLeft />
      </Button>
      <Input //   label="Search"
        input={{
          id: "title",
          type: "text",
          placeholder: "Title",
        }}
        className={classes.title}
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <Select
        id="collection"
        onChange={formik.handleChange}
        select={select}
        value={formik.values.collection}
      />

      <textarea
        name="content"
        id="content"
        // cols="100"
        // rows="10"
        placeholder="Start Writing..."
        onChange={formik.handleChange}
        value={formik.values.content}
      ></textarea>

      <div className={classes.control}>
        <Button type="submit" className={classes.btn}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;

// dispatch(
//   noteActions.addNote({
//     title: data.title,
//     date: data.date,
//     collection: data.collection,
//     content: data.content,
//   })
// );
