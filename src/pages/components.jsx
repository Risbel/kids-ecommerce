import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useState } from "react";

const Components = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BaseLayout>
      <div className="flex flex-col gap-6 px-10">
        <>
          <h1>My Buttons</h1>
          <div className="flex items-center flex-wrap gap-4">
            <Button>Hello</Button>
            <Button variant="secondary">Hello</Button>
            <Button disabled>Hello</Button>
            <Button isLoading={isLoading} onClick={() => setIsLoading((prev) => !prev)}>
              {isLoading ? "Loading..." : "Dynamic Button. Click Me!!!"}
            </Button>
            <Button size="sm">Hello</Button>
            <Button size="lg">Hello</Button>
          </div>
        </>
        <>
          <h1>My Inputs</h1>
          <div className="flex items-center flex-wrap gap-4">
            <Input placeholder="Insert your email" size="sm" />
            <Input placeholder="Insert your email" variant="secondary" />
            <Input placeholder="Insert your email" size="lg" />
            <Input placeholder="Insert your email" size="xl" />
          </div>
        </>
        <>
          <h1>My Textarea</h1>
          <Textarea placeholder="Insert your text here..." />
          <Textarea variant="secondary" placeholder="Insert your text here..." />
        </>
      </div>
    </BaseLayout>
  );
};

export default Components;
