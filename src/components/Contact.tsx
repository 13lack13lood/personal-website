"use client";

import { Form, Formik, ErrorMessage, Field } from "formik";
import React, { useRef, useState } from "react";
import * as yup from "yup";
import AOSComponent from "./AOSComponent";
import { send } from "@emailjs/browser";

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email must be valid").required("Email is required"),
});

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const sendEmail = (values: { name: string; email: string; message: string }) => {
        if (process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_PUBLIC_ID) {
            send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_PUBLIC_ID)
                .then((res) => {
                    setSuccess(true);
                })
                .catch((error) => {
                    console.log("Error occured sending email");
                    console.log(error);
                    setSuccess(false);
                });
        }
    };

    return (
        <AOSComponent>
            <div id="Contact" className="flex flex-wrap items-center justify-evenly w-full p-10 space-x-10 min-h-screen">
                <div className="flex flex-col items-center justify-center space-y-16 w-1/3 backdrop-blur-xs rounded-full">
                    <div className="text-6xl text-accent dark:text-white drop-shadow-glowAccent dark:drop-shadow-glow w-full" data-aos-anchor="#Contact" data-aos="fade-down">
                        Let&#39;s get in touch.
                    </div>
                    <div className="text-xl text-accent-light dark:text-white" data-aos-anchor="#Contact" data-aos="zoom-in-up" data-aos-delay="200">
                        It was nice meeting you. If you have a question, opportunity, or just want to chat, feel free to send me a message.
                    </div>
                </div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: "",
                    }}
                    onSubmit={(values, { resetForm }) => {
                        sendEmail(values);
                        resetForm();
                    }}
                    validationSchema={validationSchema}
                >
                    <Form className="flex flex-col w-1/2 items-center justify-center space-y-7">
                        <div className="flex flex-col justify-center text-accent-light text-xl w-full" data-aos-anchor="#Contact" data-aos="reveal-right" data-aos-delay="400">
                            <div className="text-base font-semibold pl-2 py-2">Name</div>
                            <Field
                                className="text-white w-full font-light rounded-xl px-4 py-2 outline-none border-2 border-bgcolor-primary transition-all duration-200 focus:border-accent bg-bgcolor-primary opacity-40 dark:opacity-65 drop-shadow-glowSmall"
                                name="name"
                            />
                            <ErrorMessage component="a" className="text-base text-red-400  font-semibold text-loss-m mt-3 pl-2" name="name" />
                        </div>
                        <div className="flex flex-col justify-center text-accent-light text-xl w-full" data-aos-anchor="#Contact" data-aos="reveal-right" data-aos-delay="400">
                            <div className="text-base font-semibold pl-2 py-2">Email</div>
                            <Field
                                className="text-white w-full font-light rounded-xl px-4 py-2 outline-none border-2 border-bgcolor-primary transition-all duration-200 focus:border-accent bg-bgcolor-primary opacity-40 dark:opacity-65 drop-shadow-glowSmall"
                                name="email"
                            />
                            <ErrorMessage component="a" className="text-base text-red-400  font-semibold text-loss-m mt-3 pl-2" name="email" />
                        </div>
                        <div className="flex flex-col justify-center text-accent-light text-xl w-full" data-aos-anchor="#Contact" data-aos="reveal-right" data-aos-delay="500">
                            <div className="text-base font-semibold pl-2 py-2">Message</div>
                            <Field
                                className="text-white w-full h-96 font-light rounded-xl px-4 py-2 outline-none border-2 border-bgcolor-primary transition-all duration-200 focus:border-accent bg-bgcolor-primary opacity-40 dark:opacity-65 drop-shadow-glowSmall"
                                name="message"
                                component="textarea"
                            />
                        </div>
                        <div className="pt-10 w-full flex flex-row justify-center" data-aos-anchor="#Contact" data-aos="zoom-in-up" data-aos-delay="600">
                            <button
                                type="submit"
                                className="text-accent-light rounded-full mx-auto px-16 w-fit text-center py-3 text-xl border-accent border-2 shadow-glow transition-all duration-400 backdrop-blur-xs hover:bg-accent hover:text-white hover:scale-105 hover:-translate-y-1"
                            >
                                Send
                            </button>
                        </div>
                        {success && <div className="my-2 text-white text-xl drop-shadow-glow">Sent!</div>}
                    </Form>
                </Formik>
            </div>
        </AOSComponent>
    );
};

export default Contact;
