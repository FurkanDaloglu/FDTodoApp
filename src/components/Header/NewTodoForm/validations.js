import * as Yup from "yup";

const validations= Yup.object().shape({
    text:Yup.string().required("Bu alan zorunludur."),
});

export default validations;