import { TabContent, TabItem, TabList, Tabs } from "keep-react";


export default function ProductDetailsTabs() {
    const tabs = [
        {
            title: "Description",
            value: "1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam facilis ea? Magni tenetur quidem molestias vero voluptatem nostrum incidunt rem nesciunt dignissimos, sed consequuntur ipsum modi minus assumenda pariatur."
        },
        {
            title: "Reviews",
            value: "2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam facilis ea? Magni tenetur quidem molestias vero voluptatem nostrum incidunt rem nesciunt dignissimos, sed consequuntur ipsum modi minus assumenda pariatur."
        },
        {
            title: "Support",
            value: "3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam facilis ea? Magni tenetur quidem molestias vero voluptatem nostrum incidunt rem nesciunt dignissimos, sed consequuntur ipsum modi minus assumenda pariatur."
        },
    ]
    return (
        <Tabs variant="underline" defaultActive="5" className="mx-auto">
            <TabList className="gap-12 border-b-2 border-t-transparent text-gray-500">
                {
                    tabs.map((item) => (
                        <TabItem value={item.value} className="text-lg my-0">
                            {item.title}
                        </TabItem>
                    ))
                }
            </TabList>
            {
                tabs.map((item) => (
                    <TabContent value={item.value} className="text-xl">
                        {item.content}
                    </TabContent>
                ))
            }
            <TabContent value="5">

            </TabContent>
            <TabContent value="6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus reiciendis, dolorem deleniti a voluptates quasi illum minus pariatur asperiores amet distinctio? Iste, excepturi! Esse ipsa culpa ipsum quidem sit ipsam?
            </TabContent>
            <TabContent value="7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi tempora minus! Atque, sunt odio qui modi dicta, esse dolorum sapiente at perferendis facilis expedita aperiam et, numquam non dolor.
            </TabContent>
            <TabContent value="8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eligendi culpa voluptas nam numquam laborum exercitationem dolor, dolore ullam debitis! Earum inventore quos accusamus cumque tenetur harum quisquam vitae? Earum.
            </TabContent>
        </Tabs>
    )
}
