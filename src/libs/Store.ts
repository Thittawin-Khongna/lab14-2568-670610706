import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
  couponCode: string;
  haveCoupon: boolean;
  total: number;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  setpassword: (v: string) => void;
  setconfirmPassword: (v: string) => void;
  setcouponCode: (v: string) => void;
  setHaveCoupon: (v: boolean) => void;
  discountCupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }