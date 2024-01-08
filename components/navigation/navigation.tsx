import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import Image from "next/image";

const Navigation = async () => {
  return (
    <div className="sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-50 border-b backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link href={`/`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}assets/9b2a5c10-b17c-4ef1-a1e0-257cff23c34e`}
              alt="logo"
              width="70"
              height="30"
            />
          </Link>
          {/* Category Links */}
          <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              {/* <li>
                <LangSwitcher locale={locale} />
              </li> */}
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <a href="vote.currentchart.online" target="_blank">
                  Vote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
