import { useState } from "react";
import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { Dialog } from "@/components/atoms/dialog";
import { Image } from "@/components/atoms/image";
import { Input } from "@/components/atoms/input";
import { LanguageSwitcher } from "@/components/atoms/language-switcher";
import { Link } from "@/components/atoms/link";
import { ScreenLoader } from "@/components/atoms/screen-loader";
import { ThemeSwitcher } from "@/components/atoms/theme-switcher";
import { Toaster } from "@/components/atoms/toaster";
import { Tooltip } from "@/components/atoms/tooltip";
import { useI18n } from "@/hooks/use-i18n";
import { useToast } from "@/hooks/use-toast";

export const HomePage = () => {
  const toast = useToast();
  const { t } = useI18n();

  const [isLoading, setIsLoading] = useState(false);
  const [isDefaultDialogOpen, setIsDefaultDialogOpen] = useState(false);

  const [isWithoutFooterDialogOpen, setIsWithoutFooterDialogOpen] =
    useState(false);

  const handleChangeLoader = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-center p-8">
        <div className="w-6xl flex flex-col gap-8 rounded-2xl border-2 border-zinc-300 dark:border-zinc-800 p-6">
          <h1 className="text-4xl font-semibold">Basic Components</h1>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Button
            </h2>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Variants</strong>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
                <Button variant="alert">Alert</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Card
            </h2>
            <div className="flex justify-center">
              <Card className="max-w-96 flex flex-col gap-6">
                <h1 className="font-semibold text-xl">Card Title</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  This is a card with more complex content, like title,
                  description, and a button.
                </p>
                <Button>Action</Button>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Dialog
            </h2>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Default</strong>
              <div className="flex justify-center">
                <Button onClick={() => setIsDefaultDialogOpen(true)}>
                  Open Dialog
                </Button>
                <Dialog.Root
                  isOpen={isDefaultDialogOpen}
                  onClose={() => setIsDefaultDialogOpen(false)}
                >
                  <Dialog.Header>Are you absolutely sure?</Dialog.Header>
                  <Dialog.Content>
                    <Dialog.Description>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </Dialog.Description>
                  </Dialog.Content>
                  <Dialog.Footer>
                    <Dialog.CancelAction className="w-24">
                      Cancel
                    </Dialog.CancelAction>
                    <Dialog.ConfirmAction variant="alert" className="w-24">
                      Confirm
                    </Dialog.ConfirmAction>
                  </Dialog.Footer>
                </Dialog.Root>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Without Footer</strong>
              <div className="flex justify-center">
                <Button onClick={() => setIsWithoutFooterDialogOpen(true)}>
                  Open Dialog
                </Button>
                <Dialog.Root
                  isOpen={isWithoutFooterDialogOpen}
                  onClose={() => setIsWithoutFooterDialogOpen(false)}
                >
                  <Dialog.Header>Lorem Ipsum</Dialog.Header>
                  <Dialog.Content>
                    <Dialog.Description>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non eius asperiores sit, architecto dolores magni autem
                      aliquid ab possimus beatae fuga iste repellendus quia
                      dolor sunt ad, delectus molestiae mollitia.
                    </Dialog.Description>
                  </Dialog.Content>
                </Dialog.Root>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Image
            </h2>
            <div className="flex justify-center">
              <Card>
                <Image.Root width={512} height={384}>
                  <Image.Skeleton className="rounded-lg" />
                  <Image.Area
                    src="https://picsum.photos/800/400"
                    alt="Random placeholder landscape"
                    className="rounded-lg"
                  />
                </Image.Root>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Input.Email
            </h2>
            <div className="grid grid-cols-3 items-center gap-2 max-s-480:grid-cols-1">
              <Input.Root>
                <Input.Email placeholder="Default email input" />
              </Input.Root>
              <Input.Root>
                <Input.Email disabled placeholder="Disabled email input" />
              </Input.Root>
              <Input.Root hasErrors>
                <Input.Label>Email*</Input.Label>
                <Input.Email placeholder="Detailed email input" />
                <Input.ErrorMessage>Required field</Input.ErrorMessage>
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Input.Password
            </h2>
            <div className="grid grid-cols-3 items-center gap-2 max-s-480:grid-cols-1">
              <Input.Root>
                <Input.Password placeholder="Default password input" />
              </Input.Root>
              <Input.Root>
                <Input.Password
                  disabled
                  placeholder="Disabled password input"
                />
              </Input.Root>
              <Input.Root hasErrors>
                <Input.Label>Password*</Input.Label>
                <Input.Password placeholder="Detailed password input" />
                <Input.ErrorMessage>Required field</Input.ErrorMessage>
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Input.Text
            </h2>
            <div className="grid grid-cols-3 items-center gap-2 max-s-480:grid-cols-1">
              <Input.Root>
                <Input.Text placeholder="Default text input" />
              </Input.Root>
              <Input.Root>
                <Input.Text disabled placeholder="Disabled text input" />
              </Input.Root>
              <Input.Root hasErrors>
                <Input.Label>Text*</Input.Label>
                <Input.Text placeholder="Detailed text input" />
                <Input.ErrorMessage>Required field</Input.ErrorMessage>
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Input.TextArea
            </h2>
            <div className="grid grid-cols-3 items-center gap-2 max-s-480:grid-cols-1">
              <Input.Root>
                <Input.TextArea placeholder="Default text area input" />
              </Input.Root>
              <Input.Root>
                <Input.TextArea
                  disabled
                  placeholder="Disabled text area input"
                />
              </Input.Root>
              <Input.Root hasErrors>
                <Input.Label>Text Area*</Input.Label>
                <Input.TextArea placeholder="Detailed text area input" />
                <Input.ErrorMessage>Required field</Input.ErrorMessage>
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              LanguageSwitcher
            </h2>
            <div className="flex justify-center">
              <div className="relative">
                <LanguageSwitcher className="absolute top-0 left-[-36px] w-fit" />
                <Card className="max-w-96 flex flex-col gap-2 rounded-tl-none">
                  <h1 className="font-semibold text-xl">{t("card_title")}</h1>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {t("card_description")}
                  </p>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Link
            </h2>
            <div className="flex justify-center">
              <Link>Go back to home</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              ScreenLoader
            </h2>
            <div className="flex justify-center">
              <Button onClick={handleChangeLoader}>Send Message</Button>
              <ScreenLoader isLoading={isLoading} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              ThemeSwitcher
            </h2>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Toaster
            </h2>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Default</strong>
              <div className="flex justify-center">
                <Button
                  onClick={() => toast.message("This is a default toast")}
                >
                  Show toast
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Variants</strong>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                <Button onClick={() => toast.message("New message received")}>
                  Default
                </Button>
                <Button
                  onClick={() => toast.info("New feature available next week")}
                >
                  Info
                </Button>
                <Button
                  onClick={() => toast.success("Profile saved successfully!")}
                >
                  Success
                </Button>
                <Button
                  onClick={() =>
                    toast.warning("Your session will expire in 5 minutes")
                  }
                >
                  Warning
                </Button>
                <Button
                  onClick={() =>
                    toast.error("Failed to save changes. Please try again.")
                  }
                >
                  Error
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">With Action</strong>
              <div className="flex justify-center">
                <Button
                  onClick={() =>
                    toast.message("Item deleted", {
                      action: {
                        label: "Undo",
                        onClick: () => alert("Undo clicked"),
                      },
                    })
                  }
                >
                  Toast with action
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Tooltip
            </h2>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Custom Offset</strong>
              <div className="flex justify-center">
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button>Hover me</Button>
                  </Tooltip.Trigger>

                  <Tooltip.Content side="top" sideOffset={16}>
                    Offset 16px
                  </Tooltip.Content>
                </Tooltip.Root>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Default</strong>
              <div className="flex justify-center">
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button>Hover me</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>Tooltip content</Tooltip.Content>
                </Tooltip.Root>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">
                Different Sides
              </strong>
              <div className="grid grid-cols-4 gap-2">
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button className="w-full">Left</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="left">On left</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button className="w-full">Top</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="top">On top</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button className="w-full">Bottom</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="bottom">On bottom</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button className="w-full">Right</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side="right">On right</Tooltip.Content>
                </Tooltip.Root>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-2xl font-semibold">Long Text</strong>
              <div className="flex justify-center">
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Button>Hover me</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="max-w-xs">
                    This is a longer tooltip text to demonstrate how wrapping
                    works. It should break into multiple lines instead of
                    overflowing.
                  </Tooltip.Content>
                </Tooltip.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};
