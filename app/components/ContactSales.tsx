"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, Label, Switch } from "@headlessui/react";
import ContactForm from "./ContactFrom";
import Modal from "./Modal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type setOPenModal = () => void;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

export const ContactSales: React.FC<{
  id?: string;
  classNameButton?: string;
  children?: React.ReactNode;
}> = ({ id, classNameButton, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clonedChildren = children
    ? React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            setOpenModal: setIsModalOpen,
          });
        }
        return child;
      })
    : null;
  // TODO: hacer refactor del formulario
  return (
    <>
      {clonedChildren ? (
        clonedChildren
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className={classNameButton}
        >
          Comienza ahora
        </button>
      )}
      <Modal open={isModalOpen} setOpen={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default ContactSales;
