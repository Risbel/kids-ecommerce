import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import useHandleSubmitContact from "@/hooks/useHandleSubmitContact";
import BaseLayout from "@/layouts/BaseLayout";
import { HiOutlineCheckCircle, HiOutlineExclamation } from "react-icons/hi";

const Contact = () => {
  const { handleSubmitContact, handleChange, isLoading, isError, isSuccessful, formData } = useHandleSubmitContact({
    name: "",
    email: "",
    message: "",
  });

  return (
    <BaseLayout>
      <div className="py-16">
        <form onSubmit={handleSubmitContact}>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <Input
                required
                value={formData.name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
              <Input
                required
                value={formData.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <Textarea
                required
                value={formData.message}
                className="h-20"
                name="message"
                placeholder="Message"
                onChange={handleChange}
              ></Textarea>
              <Button variant="primary" type="submit">
                {isLoading ? <span>Loading...</span> : <span>Send</span>}
              </Button>
              {isError && (
                <div className="flex items-center gap-2 text-red-500">
                  <HiOutlineExclamation className="relative top-[2px]" />
                  <span className="text-sm">Sending error, please try again later.</span>
                </div>
              )}
              {isSuccessful && (
                <div className="flex items-center justify-center gap-2 text-orange-kids">
                  <HiOutlineCheckCircle className="relative top-[2px]" />
                  <span className="text-sm">Submitted successfully</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Contact;
