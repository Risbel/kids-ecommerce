import Button from "@/components/Button";
import BaseLayout from "@/layouts/BaseLayout";
import React, { useState } from "react";

const Components = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BaseLayout>
      <div className="px-10">
        <h1 className="pb-5">My Buttons</h1>
        <div className="flex items-center gap-4">
          <Button>Hello</Button>
          <Button variant="secondary">Hello</Button>
          <Button disabled>Hello</Button>
          <Button isLoading={isLoading} onClick={() => setIsLoading((prev) => !prev)}>
            {isLoading ? "Loading..." : "Dynamic Button. Click Me!!!"}
          </Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Components;
