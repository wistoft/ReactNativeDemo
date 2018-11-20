
function sum(a, b) {
	return a + b;
  }

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('console.error is mocked using jest.fn', () => {
	console.error = jest.fn();

	console.error("hej");
	
	expect(console.error).toHaveBeenCalledTimes(1);
	
});

test('toBe and toEqual', () => {

	//objects
		const d1 = {a: 1};
		const d2 = {a: 2};
		const c1 = d1;
		
		//structual equality
		expect(d1).toEqual({a: 1});

		//not. Because it's a "strict" equality.
		expect(d1).not.toBe({a: 1});
		
		//works, because it's the same object reference.
		expect(d1).toBe(c1);
		
		//using the standard equality, which is comparing object references.
		expect(d1 == {a: 1}).toBe(false);

	//booleans
		
		const b1 = true;
		const b2 = true;
		
		expect(b1).toBe(b2);
		expect(b1).toEqual(b2);
		
	//string values (not objects)

		const s1 = "hej";
		const s2 = "hej";
		
		expect(s1).toBe(s2);
		expect(s1).toEqual(s2);
		expect("dav").toEqual("dav");

});

test('using not matcher', () => {

	expect(true).not.toBe(false);
	
});

test('adding floating point numbers', () => {
	
	//not the way to compare floating points
	expect(0.1 + 0.2).not.toBe(0.3);

	//works
	expect(0.1 + 0.2).toBeCloseTo(0.3);
});


test('using regexp', () => {

	const pattern = /^a?b$/;

	expect("a").not.toMatch(pattern);
	expect("cb").not.toMatch(pattern);
	expect("b.").not.toMatch(pattern);
	
	expect("b").toMatch(pattern);
	expect("ab").toMatch(pattern);

});


//fails with: Jest: Couldn't locate all inline snapshots.
// it('use inline snapshot', () => {
// 	expect("hello there").toMatchInlineSnapshot();
// 	expect({a:"a"}).toMatchInlineSnapshot();
// });


it('will snapshot a string', () => {
	expect("hello there").toMatchSnapshot();
});


it('will check the matchers and pass', () => {
	const user = {
	  createdAt: new Date(),
	  id: Math.floor(Math.random() * 20),
	  name: 'LeBron James',
	};
  
	expect(user).toMatchSnapshot({
	  createdAt: expect.any(Date),
	  id: expect.any(Number),
	});
});