"use client";

import { Alert } from "flowbite-react";

export default function SuccessAlert({children}) {
  return (
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium"></span> {children}
    </Alert>
  )
}
