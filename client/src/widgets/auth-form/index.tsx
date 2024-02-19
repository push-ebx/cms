import { useState } from "react";
import { Button, Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import { createUser, login } from "@/shared/api/users.ts";
import { AxiosError } from "axios";
import styles from "./style.module.scss";

export const AuthForm = () => {
  const [selected, setSelected] = useState("login");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const res = await createUser({ username, password });
      console.log(res);
    } catch (e: AxiosError | any) {
      console.log(e.response?.data.error);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await login({ username, password });

      console.log(res?.access_token);
    } catch (e: AxiosError | any) {
      console.log(e.response?.data.error);
    }
  };

  return (
    <div className={styles.main}>
      <div className="flex flex-col w-full">
        <Card className="max-w-full w-[340px] h-[400px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input
                    isRequired
                    label="Username"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" onClick={handleSignIn}>
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>

              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input
                    isRequired
                    label="Username"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" onClick={handleSignUp}>
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};