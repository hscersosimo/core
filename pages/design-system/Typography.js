const Typography = () => {
    return ( 
        <>      
        <div className="row">
            <div className="col-sm-12 col-md-3 text-md-end mb-5">
                <i className="fa-light fa-book-font fa-2xl mt-3"></i>
                <h1 className="mt-3">Typography</h1>
            </div>
            <div className="col-sm-12 col-md-9">
                <div className="">
                    <h3 className="border-bottom">Display</h3>  
                    <p className="display-1">Display-1</p>
                    <p className="display-2">Display-2</p>
                    <p className="display-3">Display-3</p>
                    <p className="display-4">Display-4</p>
                    <p className="display-5">Display-5</p>
                    <p className="display-6">Display-6</p>
                </div>


                <div className="mt-6">
                    <h3 className="border-bottom">Headings</h3>  
                    <p className="h1">h1. Heading 1</p>
                    <p className="h2">h2. Heading 2</p>
                    <p className="h3">h3. Heading 3</p>
                    <p className="h4">h4. Heading 4</p>
                    <p className="h5">h5. Heading 5</p>
                    <p className="h6">h6. Heading 6</p>
                </div>
                <div className="mt-6">
                    <h3 className="border-bottom">Paragraph Styles</h3>  
                    <p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                    <p><u>This line of text will render as underlined.</u></p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                </div>

                <div className="mt-6">
                    <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>

                <div className="mt-6">
                <h3 className="border-bottom">Font Sizes</h3> 
                    <p className="fs-1 mb-4">Font size 1 Lorem ipsum dolor sit.</p>
                    <p className="fs-2 mb-4">Font size 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="fs-3 mb-4">Font size 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat.</p>
                    <p className="fs-4 mb-4">Font size 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque.</p>
                    <p className="fs-5 mb-4">Font size 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus dolore aliquam hic?</p>
                    <p className="fs-6 mb-4">Font size 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus dolore aliquam hic?</p>
                    <p className="fs-7">Font size 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus dolore aliquam hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus dolore aliquam hic?</p>

                </div>



                <div className="mt-6">
                    <h3 className="border-bottom">Lists</h3>  
                    <ul className="list-unstyled">
                        <li>This is a list.</li>
                        <li>It appears completely unstyled.</li>
                        <li>Structurally, it's still a list.</li>
                        <li>However, this style only applies to immediate child elements.</li>
                        <li>Nested lists:
                            <ul>
                                <li>are unaffected by this style</li>
                                <li>will still show a bullet</li>
                                <li>and have appropriate left margin</li>
                            </ul>
                        </li>
                        <li>This may still come in handy in some situations.</li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">This is a list item.</li>
                        <li className="list-inline-item">And another one.</li>
                        <li className="list-inline-item">But they're displayed inline.</li>
                    </ul>
                </div>
                <div className="mt-6">

                    <dl className="row">
                        <dt className="col-sm-3">Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt className="col-sm-3">Term</dt>
                        <dd className="col-sm-9">
                            <p>Definition for the term.</p>
                            <p>And some more placeholder definition text.</p>
                        </dd>

                        <dt className="col-sm-3">Another term</dt>
                        <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>
                    </dl>                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Typography;