import LeaderCard from "../components/about-us/LeaderCard";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      bio: "John has over 15 years of experience in the tech industry, leading innovative projects in AI and machine learning.",
      image: "https://res.cloudinary.com/dmubfrefi/image/private/s--X2pk0_8M--/c_crop,h_3200,w_3200,x_0,y_0/c_scale,w_384/f_auto/q_auto/v1/dee-about-cms-prod-medias/0ad495ef-4337-4926-bd22-3baf192fd5fd/nike-inc-leadership-mark-parker-0136-square.jpg?_a=BAAAV6Bs",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane is a highly skilled engineer with a passion for developing cutting-edge technologies.",
      image: "https://res.cloudinary.com/dmubfrefi/image/private/s--9Dec3mxE--/c_crop,h_3200,w_3200,x_0,y_0/c_scale,w_384/f_auto/q_auto/v1/dee-about-cms-prod-medias/0ad495ef-4337-4926-bd22-3baf192fd5fd/nike-inc-leadership-ann-miller-0095-square.jpg?_a=BAAAV6Bs",
    },
    {
      name: "Michael Brown",
      role: "Marketing Director",
      bio: "Michael is an expert in digital marketing and growth strategies.",
      image: "https://res.cloudinary.com/dmubfrefi/image/private/s--gnOiKRXK--/c_crop,h_1282,w_1281,x_856,y_0/c_scale,w_384/f_auto/q_auto/v1/dee-about-cms-prod-medias/05b1d832-68f8-4f8e-9064-6208ea57c20d/nike-05232023-kejuan-wilkins0020-ck-v1.jpg?_a=BAAAV6Bs",
    },
    {
      name: "Dave Collins",
      role: "Head of Sales",
      bio: "Michael is an expert in digital marketing and growth strategies.",
      image: "https://res.cloudinary.com/dmubfrefi/image/private/s--PMJeiAi2--/c_crop,h_3200,w_3200,x_0,y_0/c_scale,w_384/f_auto/q_auto/v1/dee-about-cms-prod-medias/0ad495ef-4337-4926-bd22-3baf192fd5fd/nike-inc-leadership-matt-friend-0568-square.jpg?_a=BAAAV6Bs",
    },
  ];

  return (
    <>
      <div className="h-[100vh] bg-hero-image bg-center">
        <div className="absolute bottom-4 text-white px-6 md:px-10 pb-10">
          <h1 className="text-heading-1 font-bold">
            Built by Champions, <br />
            For Champions
          </h1>
          <p className="text-heading-5">
            <i>With a Legacy of Strength and Resilience.</i>
          </p>
        </div>
      </div>
      <div className="px-6 md:px-10">
        <h1 className="mx-auto max-w-[1000px] text-heading-5 font-semibold py-16">
          At FinalForm, we’re more than just fitness enthusiasts—we’re innovators, athletes, and visionaries united by a passion to revolutionize the way you train.
        </h1>
        <div className="mb-16">
          <h1 className="text-heading-5 font-semibold mb-6">Team</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {
              teamMembers.map((teamMember) => (
                <LeaderCard teamMemberInfo={teamMember} key={teamMember.name} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
