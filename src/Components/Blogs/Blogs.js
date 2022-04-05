import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Card border="primary" style={{ width: "auto" }}>
            <Card.Header>Context API</Card.Header>
            <Card.Body>
              {/* <Card.Title>Primary Card Title</Card.Title> */}
              <Card.Text className="fs-4">
                React Context API হলো একটি react অ্যাপস বা ওয়েব সাইটের জন্য কার্যকরভাবে গ্লোবাল
                ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। কনটেক্সট প্রতিটি স্তরে
                ম্যানুয়ালি প্রপস ডাউন না করেই কম্পোনেন্ট ট্রি এর মাধ্যমে ডেটা পাস করার একটি উপায়
                প্রদান করে। এটি props drilling এর থেকে ভালো, সহজ বিকল্প একটি পদ্ধতি। যা সরাসরি
                grandparent থেকে সরাসরি child বা parent পেতে পারেন। এর মাধ্যমে খুব সহজেই ডাটা এক্সেস
                করে কাজ করা যায়। Redux ব্যবহার করে state পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা
                পদ্ধতি হিসাবেও উল্লেখ করা হয়।
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card border="primary" style={{ width: "auto" }}>
            <Card.Header>Semantic Tags</Card.Header>
            <Card.Body>
              {/* <Card.Title>Primary Card Title</Card.Title> */}
              <Card.Text className="fs-4">
                semantic tags ব্রাউজার এবং ডেভেলপারদের কাছে অর্থপূর্ণ স্পষ্টভাবে সংজ্ঞায়িত বর্ণনা
                করে। Examples of non-semantic elements: div and span - Tells nothing about its
                content. form, table, header, article ,footer, ইত্যাদি । এই ট্যাগ গুলো স্পষ্টভাবে এর
                বিষয়বস্তু সংজ্ঞায়িত করে। পেইজ এর search র‌্যাঙ্কিংকে প্রভাবিত করার জন্য search
                ইঞ্জিনগুলি এর কন্টেন্ট গুলিকে গুরুত্বপূর্ণ কীওয়ার্ড হিসাবে বিবেচনা করে. এবং খুব
                সহজেই ব্রাউজার বুজতে পারে। দৃষ্টি প্রতিবন্ধী ব্যবহারকারীরা এই ট্যাগ গুলোর মাধ্যমে
                একটি পৃষ্ঠা নেভিগেট করতে পারে৷
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card border="primary" style={{ width: "auto" }}>
            <Card.Header>Inline and Inline-block </Card.Header>
            <Card.Body>
              {/* <Card.Title>Primary Card Title</Card.Title> */}
              <Card.Text className="fs-4">
                একটি inline element হিসাবে একটি element প্রদর্শন করে. কোন উচ্চতা এবং প্রস্থ
                বৈশিষ্ট্য কোন প্রভাব থাকবে না. এটি একটি inline element যা একই লাইনে প্রদর্শন করে।
                অন্যথায়, ইনলাইন উপাদানগুলি একটি নতুন লাইনে শুরু হয় না এবং শুধুমাত্র এর বিষয়বস্তুর
                মতো প্রস্থ নেয়। সুতরাং, আপনি যদি কোনো প্রস্থ এবং উচ্চতা সেট করার চেষ্টা করেন, তাহলে
                এর কোনো প্রভাব থাকবে না। ex: span, a, img, ইত্যাদি। inline Block কন্টেইনার হিসাবে
                একটি element প্রদর্শন করে। আপনি উচ্চতা এবং প্রস্থ মান সেট করতে পারেন. এটি মূলত
                ইনলাইনের মতো একই , আপনি উচ্চতা এবং প্রস্থের মান সেট করতে পারেন।
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
