import { useState, useEffect } from "react";
export default function useContact(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props);
  });
  return open;
}
