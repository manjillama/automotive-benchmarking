<script lang="ts">
	import BrakingSystem from './benchmark/brakingSystem.svelte';
	import Chassis from './benchmark/chassis.svelte';

	const tempProducts = [
		{
			id: 2,
			name: 'Yamaha r15 v2',
			createdAt: '2023-03-10T07:21:23.260Z',
			updatedAt: '2023-03-10T07:26:59.883Z',
			feature: {
				chassis: {
					description:
						'This is a chassis description.  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
					media: {
						data: {
							attributes: {
								url: 'https://images.unsplash.com/photo-1611441085268-7674a97a0905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							}
						}
					}
				},
				swingarm: {
					description: 'This is a swingarm description',
					media: {
						data: {
							attributes: {
								url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
							}
						}
					}
				},
				brakingSystem: {
					typeOfBrake: {
						description: 'This is a type of brake description',
						media: {
							data: {
								attributes: {
									url: 'https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
								}
							}
						}
					},
					typeOfBrakeActuation: {
						description: 'This is a type of brake actuation description',
						media: {
							data: {
								attributes: {
									url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
								}
							}
						}
					}
				}
			}
		},
		{
			id: 3,
			name: 'Yatri P1',
			createdAt: '2023-03-10T07:21:23.260Z',
			updatedAt: '2023-03-10T07:26:59.883Z',
			feature: {
				chassis: {
					description: 'This is a P1 chassis description',
					media: {
						data: {
							attributes: {
								url: 'https://images.unsplash.com/photo-1611441085268-7674a97a0905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
							}
						}
					}
				},
				swingarm: {
					description: 'This is a swingarm description',
					media: {
						data: {
							attributes: {
								url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
							}
						}
					}
				},
				brakingSystem: {
					typeOfBrake: {
						description: 'This is a type of brake description',
						media: {
							data: {
								attributes: {
									url: 'https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
								}
							}
						}
					},
					typeOfBrakeActuation: {
						description: 'This is a type of brake actuation description',
						media: {
							data: {
								attributes: {
									url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
								}
							}
						}
					}
				}
			}
		}
		// {
		// 	id: 2,
		// 	name: 'Yamaha r15 v2',
		// 	createdAt: '2023-03-10T07:21:23.260Z',
		// 	updatedAt: '2023-03-10T07:26:59.883Z',
		// 	feature: {
		// 		chassis: {
		// 			description: 'This is a chassis description',
		// 			media: {
		// 				data: {
		// 					attributes: {
		// 						url: 'https://images.unsplash.com/photo-1611441085268-7674a97a0905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
		// 					}
		// 				}
		// 			}
		// 		},
		// 		swingarm: {
		// 			description: 'This is a swingarm description',
		// 			media: {
		// 				data: {
		// 					attributes: {
		// 						url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
		// 					}
		// 				}
		// 			}
		// 		},
		// 		brakingSystem: {
		// 			typeOfBrake: {
		// 				description: 'This is a type of brake description',
		// 				media: {
		// 					data: {
		// 						attributes: {
		// 							url: 'https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
		// 						}
		// 					}
		// 				}
		// 			},
		// 			typeOfBrakeActuation: {
		// 				description: 'This is a type of brake actuation description',
		// 				media: {
		// 					data: {
		// 						attributes: {
		// 							url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
		// 						}
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// }
	];
</script>

<div>
	<div class="flex">
		<h2 class="font-semibold text-lg mb-2">Feature</h2>
	</div>
	<Chassis products={tempProducts} />
	<BrakingSystem products={tempProducts} />
</div>
