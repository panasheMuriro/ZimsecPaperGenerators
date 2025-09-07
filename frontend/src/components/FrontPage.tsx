function FrontPage() {
  return (
    <div className="mx-12 font-serif" style={{ fontFamily: "Times New Roman" }}>
      <div className="h-8 flex ">
        <div className="w-[50%]">Candidate Name</div>
        <div className="w-[20%]">Center Number</div>
        <div className="w-[30%]">Candidate Number</div>
      </div>

      <div className="border-2 rounded-xl h-9 flex ">
        <div className="h-8 border-r-2 w-[50%]"></div>
        <div className="h-8 border-r-2 w-[20%]"></div>
      </div>
      <div className="border-2 rounded-3xl h-[80vh] mt-12">
        <div className="m-3 border-2 rounded-3xl text-center flex flex-col items-center p-3">
          <div className="h-24 w-24">
            <img src="./zimsec_logo.jpg" />
          </div>
          <span style={{ fontSize: "1.5rem", fontWeight: 500 }}>
            {" "}
            ZIMBABWE SCHOOL EXAMINATIONS COUNCIL
          </span>
          <span className="font-semibold">
            General Certificate of Ordinary Excellence
          </span>

          <div className="flex justify-between w-full text-lg">
            <div className="flex flex-col items-start">
              <span className="font-semibold">MATHEMATICS</span>
              <span>PAPER 1</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="font-semibold">4004/1</span>
              <span>2 hours 30 minutes</span>
            </div>
          </div>

          <div className="flex justify-start w-full text-lg my-3 font-bold">
            PRACTICE SESSION
          </div>

          <div className="flex justify-start w-full text-md my-3">
            Additional Materials: Mathematical Instruments
          </div>
        </div>
        <div className="p-5">
          <span className="font-bold">INSTRUCTIONS TO CANDIDATES</span>
          <p>
            Write your Name, Centre number and Candidate number in the spaces at
            the top of each page.{" "}
          </p>
          <p>
            Check that all the pages are in the booklet and ask the invigilator
            for a replacement if there are duplicate or missing pages.{" "}
          </p>
          <p>
            If working is needed for any question, it must be shown in the space
            below that question.
          </p>
          <p>Omission of essential working will result in less of marks.</p>
          <p className="mb-4">
            Decimal answers which are not exact should be given to three
            significant figures unless stated otherwise.
          </p>

          <span className="font-bold mt-6">INFORMATION FOR CANDIDATES</span>

          <p>
            The number of marks is given in brackets [] at the end of each
            question or part question.{" "}
          </p>
          <p>This paper is marked out of 100</p>
          <p className="mt-3"><span className="font-bold">PLEASE NOTE</span>: This paper is not officially from ZIMSEC</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default FrontPage;
